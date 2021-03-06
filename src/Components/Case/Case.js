import React, {useState, useCallback} from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom'

const Case = (props) => {
    const {state} = props.location
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([{name:'abc', description:'laslaldladsl'}])
    const [expandAll, setExpandAll] = useState({expandAllText: 'Expand All', value:false})

    const click = (value) => {
        setSearch(value.currentTarget.innerText)
    }
    const expandAllFunc = useCallback((event) => {
        event.preventDefault();
        const temp = expandAll.expandAllText === 'Expand All' ? 'Collapse All' : 'Expand All';
        setExpandAll({expandAllText: temp, value: !expandAll.value})
    },[setExpandAll, expandAll.value, expandAll.expandAllText])

    const getResult = (value) => {
        console.log(value)
    }
    return (
        <div className='case'>
            <section id={'section1'}>
                <Jumbotron backPageText='case' searchCallBack={(value) => {getResult(value)}} searchText={search} adminLink='/' caseFile={state} searchTextLabel='Search Document'/>
                <div className='container' style={{marginTop:'1em', fontWeight:'bolder', fontSize:'16px'}}>Documents Summary</div>
                <div className='container' style={{marginTop:'1em'}}>
                    <Card padding={{padding:'0.25em'}}>
                        <div className='app-inline-flex '>
                            <p>Description: </p>
                            <p> Legal, complaint, case, claim</p>
                        </div>
                    </Card>
                </div>
                <div className='app-flex app-flex-row justify-content-flex-end container'>
                    <p onClick={(event) => {expandAllFunc(event)}}>{expandAll.expandAllText}</p>
                </div>
                <Accordion
                    PanelComponent={'People'}
                    showTable={false}
                    showExpanded={expandAll.value}
                    contentData={ [{name:'lalor', freqNo:'2', pageNo: '2,3'}, {name:'foster', freqNo:'2', pageNo: '2,3'}, {name:'Kimberly', freqNo:'2', pageNo: '2,3'}]}
                    dataTransfer={(value) => { click(value) }}></Accordion>
            </section>
            <section id={'section2'} className='container'>
                {searchResults.length > 0 && (
                    <>
                        <div className='app-flex app-flex-row justify-content-space-between  align-items-center '>
                            <h2>Search Results</h2>
                            <AnchorLink href='#section1'>Back to top</AnchorLink>
                        </div>
                        <div>
                            {searchResults.map((item, index) => {
                                return <Card key={index}>
                                    <>            
                                        <Link 
                                            to={{
                                                pathname:'/case',
                                                state: item.name
                                            }}
                                            style={{
                                                fontSize:'25px'
                                            }}>{item.name}</Link>
                                            <p>{item.description}</p>
                                    </>
                                </Card>
                            })}
                        </div>
                    </>
                )
                }
            </section>
        </div>
    )
}
export default withRouter(Case)