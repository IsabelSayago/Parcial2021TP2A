/**
 * Dato el array de inventores, desarrollar una funcion que agregue una nueva propiedad
 * los descubrimientos de los inventores por ej. para Einstein 
 * ['Teoría de la relatividad especial','Equivalencia entre masa y energía','Teoría de la relatividad general']
 * 
 */

 const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  /**
   * Función que agrega descubrimientos en el array de inventors
   * @param {*} inventor 
   * @param {*} discoveries 
   * @param {*} inventors 
   */
  function addDiscoveries(inventor, discoveries, inventors){ 
    /*  return inventors
        .map(inv => {
          if(inv.last === inventor){
            return {...inv, discoveries: discoveries}
          } else{
            return inv
          }
        })  */
        const NOTFOUND = 'Inventor is not in the list'
        let index = inventors.findIndex(inv => inv.last === inventor)
        let inventorInArray;
        let inventorsNew = [...inventors];

        if(index != -1){
          inventorInArray = inventors.splice(index)[0];
          inventorInArray = ({...inventorInArray,discoveries: discoveries})
          inventorsNew.splice(index,1,inventorInArray)
          return inventorsNew
        } else {
          console.log(NOTFOUND)
          return inventors
        }
        
        
      }

console.log(addDiscoveries('Einstein', 
['Teoría de la relatividad especial','Equivalencia entre masa y energía','Teoría de la relatividad general'], inventors
)); 