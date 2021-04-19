import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss';
const repository ={
    name : `unform`,
    desciption : `Form in Reaact`,
    link : `https://github.com/tilherme?tab=repositories`
}

export function Repositorylist() {
    return(
        <section className="repository-list">
            <h1> Lista de Repositorio </h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}