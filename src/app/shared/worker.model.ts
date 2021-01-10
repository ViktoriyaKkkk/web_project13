export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    phone: string;
    id?: number;
}

export enum MyWorkerType {
    programmer, 
    designer,
    reclamer, 
    manager,
}

export let MyWorkersDataBase: MyWorker[] = [
    {id:1, name: 'Иван',surname: 'Иванов',phone:"+79525509726", type: MyWorkerType.programmer},
    {id:2, name: 'Петр',surname: 'Петров',phone:"+79525509726", type:  MyWorkerType.designer},
    {id:3, name: 'Сидор',surname: 'Сидоров',phone:"+79525509726", type:  MyWorkerType.reclamer},
    {id:4, name: 'Василий',surname: 'Васильев',phone:"+79525509726", type: MyWorkerType.manager},
]