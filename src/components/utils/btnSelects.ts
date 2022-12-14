export const DEFAULTSELECT = {
    home:true,
    professionals:false,
    projects:false,
    extraHours:false,
    notes:false,
    reports:false,
    services:false,
    settings:false,
    company:false,
} 

export function alterObject(obj:typeof DEFAULTSELECT,defaultValue: string){
    let newObj:any = DEFAULTSELECT; 
    for (const [key,value] of Object.entries(obj)) {
        if(key === defaultValue){
            newObj[key] = true
        }else{  
            newObj[key] = false
        }
    }
    return newObj
}