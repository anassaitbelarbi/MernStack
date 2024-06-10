import { useEffect, useState } from "react";
import HttpService from "@services/http.service"
import { IModel } from "types";

function Test() {
    const http = new HttpService();
    const [users, setUsers] = useState<IModel.IUser[]>([]);

    const spoolUserRecords = async () => {
        const response = await http.service().get<IModel.IUser[]>(`/users`);
        if (response?.length) setUsers([...response]);
    };

    useEffect(() => {
        spoolUserRecords();
    }, []);



    return (
        <>{users?.map((user: IModel.IUser) => <p>{user.name}</p>)}</>
    )
}

export default Test