import styles from './PlayIcon.module.css';

export const PlayIcon = ({ handleClick }) => {

    return (
        
        <>
            <svg className={styles.playSvg} onClick={handleClick} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                width="32px" height="32px" viewBox="0 0 38.083 38.083"
                xmlSpace="preserve">
            <g>
                <g>
                    <path d="M6.655,36.904V1.177c0-0.461,0.269-0.879,0.687-1.07c0.419-0.191,0.911-0.121,1.26,0.178l22.416,17.568
                        c0.258,0.223,0.406,0.545,0.41,0.885c0.004,0.326-0.143,0.663-0.396,0.889L8.616,37.784c-0.347,0.31-0.842,0.385-1.265,0.194
                        C6.927,37.787,6.655,37.368,6.655,36.904z M9.01,3.744v30.535l19.449-15.52L9.01,3.744z" stroke="rgb(255, 55, 55)" strokeWidth="0.5"/>
                </g>
            </g>
            </svg>
        </>
    )
}