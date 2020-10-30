import React, { useState } from 'react'

import IndiaMain from './IndiaComp/IndiaMain';

const India = () => {

    return(
        <div className={styles.container}>

            <div>
            <IndiaMain checked={checked} />
            </div>
        </div>
    );

};
 
export default India;