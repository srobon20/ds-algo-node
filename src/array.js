//to check whether the input is array or not
//write a function which will check the above condition
const CustomArray = (array)=>{
    return {
        isArrayOrNot(){
            if(!array){
                throw Error('required input!')
            }
            if(array instanceof Array){
                return true 
            }
            return false 
        },

        // last element
        lastElement(){
            if(this.isValid(array)){
                const lastElement = array[array.length-1];
                return lastElement;

            }else throw new Error('required input')
            
            

        },

        isValid(inp){
            if(!inp){
                return false
            }
            return true;
        }

    }
}

module.exports = CustomArray;
