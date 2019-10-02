import React from 'react';
import SectionsAdd from '../../components/SectionsAdd';
import SectionsList from '../../components/SectionsList';


function Admin(props){
    return(
        <>
        {props.match.params.sectionId && <SectionsAdd sectionId={props.match.params.sectionId}></SectionsAdd> }
        {!props.match.params.sectionId && <SectionsList></SectionsList>}
        </>
    );
}

export default Admin;