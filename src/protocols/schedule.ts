export type Doctor={
    id:number,
    email:string,
    poassword:string,
    locationspeciality_id:number,
    name:string
}

export type Schedule={
    id:number,
    doctor_id:number,
    date:Date | string,
    available:boolean
}


