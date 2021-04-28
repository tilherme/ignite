/* eslint-disable jsx-a11y/anchor-is-valid */
export function RepositoryItem(props) {

    return(
    
        <li>
        <strong>{props.repository.name }</strong>

        <p>{props.repository.desciption }</p>

        <a href={props.repository.html_url}>
            Acessar link 
             </a>
    </li>
 
    
    )
}