/* eslint-disable jsx-a11y/anchor-is-valid */
export function RepositoryItem(props) {

    return(
    
        <li>
        <strong>{props.repository?.name ?? `default`}</strong>

        <p>{props.repository?.desciption ?? `default`}</p>

        <a href={props.repository?.link ?? `default`}>
            Acessar link
             </a>
    </li>
 
    
    )
}