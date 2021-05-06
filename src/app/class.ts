
export interface NewClass {
    id: number;
    name: string;
    students: Array<NewStudent>;
}

export interface NewStudent {
    id: number;
    name: string;
    class_id: number;
}

interface AddNew {
    id: number,
    name: string,
    class_id: number
}
interface DeleteStd {
    id: number
}
export interface UpdateClass {
    id: number,
    name: string,
    students: Array<AddNew>,
    DeletedStudents: Array<DeleteStd>
}