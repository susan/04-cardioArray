
document.addEventListener("DOMContentLoaded", () => {

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    
      //1.Filter for those born in 1500s
      const babies15= inventors.filter(inventor => inventor.year>1499 && inventor.year <1600)
      //console.table.,2l/21n213klnkln(babies15)
      
      //2. map inventors first and last names
      const inventorNames = inventors.map(inventor=> `${inventor.first} ${inventor.last}`)
      //console.log(inventorNames)

      //3. sort by birthdate, old to young

      const birthdate = inventors.sort((a,b) => b.year- a.year)
      //console.table(birthdate)
    
    
    //4. reduce how many years did they all live
    
    //step one: I made an age  pair and I sorted by it
    // const byAge = inventors.map(inventor=> {
    //     const age = inventor.passed - inventor.year
    //     return {...inventor, age}
    //     }).sort((a,b) => b.age - a.age)
    //console.log(byAge)
    
    //    const shorterByAge = inventors.sort((a,b)=> b[b.passed -b.year]- a[a.passed-a.year])   
    //   console.log(shorterByAge)
    
    //each time in someReducer the accum is returned and passed into next round

     const someReducer = (accum, elem) => accum + elem.passed - elem.year
     const total = inventors.reduce(someReducer, 0)
     
     //console.log("total", total)//861
   
   
    // 5. Sort the inventors by years lived
    const byAge = inventors.map(inventor=> {
        const age = inventor.passed - inventor.year
        return {...inventor, age}
        }).sort((a,b) => b.age - a.age)
    console.table(byAge)

    const oldest = inventors.sort((a, b) => {
        const lastGuy = a.passed - a.year
        const nextGuy = b.passed -b.year
        return nextGuy - lastGuy
    })
    console.table(oldest)
     // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//Step one looked for links
    //const links =document.querySelectorAll(".mw-category-group a")
    //this is a node list so can only do forEach
    //convert to array
    //then map the title
    //then filter for includes 'de'

    // Sort the people alphabetically by last name
    const string = 'Beck, Glenn'
    const newStr = string.split(', ')
    //console.log(newStr[0])
    
    const alpha =people.sort( (a,b)=> {  
    //if a is greater return 1, if b is greater return -1 because
    //we want alphabetical
    return b.split(', ')[0] - a.split(', ')[0]
    // if (b.split(', ')[0] >  a.split(', ')[0] ) return -1
    // if (a.split(', ')[0] >  b.split(', ')[0] ) return 1
    // //if  a is equal to b, return 0
    // return 0;
    })
    console.log(alpha)
 })

 // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

   const timesRepeated = array => {
      const breadcrumbs = {}

      array.forEach(el=> {
       if (!breadcrumbs[el]) {
           breadcrumbs[el] = 1;
       }
       else {
           breadcrumbs[el]++
       }
     })
    return breadcrumbs
   }
   const cache = timesRepeated(data)
   console.log(cache)
   const sumReducer = (acc, elem) => acc + elem
   const sum = Object.values(cache).reduce(sumReducer, 0)
   console.log(sum)


    const aReducer = (obj, elem)=> {
        if(!obj[elem]) {
            obj[elem] = 1;
        }
        obj[elem]++  
        
       return obj;   
    }

   const useEmptyObjAsAccum= data.reduce(aReducer, {})  
   console.log(useEmptyObjAsAccum)