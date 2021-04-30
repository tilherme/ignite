import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss';
import { useEffect, useState } from "react";

interface Repository{
    name: string;
    description: string;
    html_url: string;
}
export function Repositorylist() {
    const [ repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() =>{
        fetch('https://api.github.com/users/tilherme/repos')
        .then(response =>response.json())
        .then(data => setRepositories(data))

    },[])

    return(
        <section className="repository-list">
            <h1> Lista de Repositorio </h1>

            <ul>
           { repositories.map(repository =>{
               return <RepositoryItem key={repository.name} repository={repository} />
           })
               
           }
            </ul>
        </section>
    )
}