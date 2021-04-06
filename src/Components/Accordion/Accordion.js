import React, {useState, useRef, useEffect} from 'react'
import styles from './Accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function AccordionTable(props) {
    const {contentData, PanelComponent, dataTransfer, showTable, sortOrder, showExpanded} = props
    const accordionIcons = ['plus', 'minus']
    const [accordionIconIndex, setAccordionIcon] = useState(0)
    const [setActive, setActiveState] = useState("");
    const content = useRef(null);
    const firstLoad = useRef(true)
    const [setHeight, setHeightState] = useState("0px");
    const [showData, setShowData] = useState(false)

    const toggleAccordion = () => {
        setAccordionIcon(accordionIconIndex === 0 ? 1 : 0);
        setActiveState(setActive === "" ? "active" : "");
        if(showTable) {
            setShowData(!showData)
        } else {
            setHeightState(
                setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
            );
        }

    }

    useEffect(() => {
        if(showExpanded) {
            toggleAccordion()
        }
    }, [])

    useEffect(() => {
        if(firstLoad.current) {    
            firstLoad.current = false
            return;
        }
        toggleAccordion()
    }, [showExpanded])
    return (
        <div className={`${styles['accordion__section']} container back-color-white`}>
            {!showTable && (
            <>
                <button className={`${styles.accordion} ${setActive} blue-color text-left`} onClick={toggleAccordion}>
                        <div className={styles['accordion__title']}>
                            {PanelComponent}
                        </div>
                    <FontAwesomeIcon icon={accordionIcons[accordionIconIndex]} color="white" className={`${styles['accordion__icon']}`}/>
                </button>  
                <div ref={content} className={styles.accordion__content} style={{ maxHeight: `${setHeight}` }}>
                    <div className={styles.accordion__text}>
                        <table >
                            <tbody>
                            {contentData.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td className='withborder' onClick={(evt) => {dataTransfer(evt)}}>{item.name}</td>
                                    <td className='withborder'>Freq No: {item.freqNo}</td>
                                    <td className='withborder'>Page No: {item.pageNo}</td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
            )}
            {showTable && (
                <table style={{borderCollapse:'collapse'}}>
                    <tr className={`${styles['accordion-table']} ${setActive} blue-color`} onClick={toggleAccordion}>
                        {PanelComponent.map((item, index) => {
                            return <th className={item.class}  key={index} >{item.name}<FontAwesomeIcon className={styles.sort_icon} id={`#${item.name}`} icon='sort' color="white"  onClick={(evt) => {
                                sortOrder(evt)
                            }}/></th>
                        })}
                        <th className=''><FontAwesomeIcon icon={accordionIcons[accordionIconIndex]} color="white" className={`${styles['accordion__icon']}`}/></th>
                    </tr>
                        {showData && contentData.map((item, index) => {
                            return (<tr key={index}>
                                <td className={`text-left  padding-left ${styles['space-padder']} text-decoration-underline`} onClick={(evt) => {dataTransfer(evt)}}>{item.name}</td>
                                <td className='text-center'>{item.sentiment}</td>
                                <td className='text-center'>{item.type}</td>
                                <td className='text-center'>{item.length}</td>
                            </tr>)
                        })}
                </table>   
            )}
        </div>
    )
}
