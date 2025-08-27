import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

export default function ReposList({nomeUsuario}){
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(()=> {
        const reposCatch = async () => {
            setLoading(true);
            setErro("");
        

        try{
            const gitApi = await fetch(`http://api.github.com/users/${nomeUsuario}/repos`); 

            if(!gitApi.ok){
                throw new Error("User not found")
            }

            const res = await gitApi.json();

            setTimeout(()=> {
                setRepos(res);
                setLoading(false);
            }, 3000);
        } catch (e){
            console.error(e.message);
            setErro(e.message);
            setLoading(false);
            setRepos([]);
        }
    };
        reposCatch();
    },[nomeUsuario]);

    return (
        <div className="container">
            {loading ? (
                <h3>Loading...</h3>
            ) : erro ? (
                <h2>Usuário não encontrado</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({id,name,language,html_url}) =>(
                        <li key={id} className={styles.listItem}>
                            <div className={styles.itemName}>
                                <b>Nome: </b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b> {language}
                            </div>
                            <a href={html_url} className={styles.itemLink} target="_blank">Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}