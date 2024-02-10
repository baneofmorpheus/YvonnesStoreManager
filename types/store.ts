export interface StoreInterface{
    name:string
    suppliers:SupplierInterface[]
    userId:string
}

export interface SupplierInterface{
    name:string
    email:string
    phoneNumber:string
}