import React from 'react';

function TabHeader() {

    return (
        <div className={'d-flex offset-3 col-6 mt-5 bg-info'}>
            <div className={'col-2 border p-2 text-center'}>ID</div>
            <div className={'col-4 border p-2 text-center'}>Model</div>
            <div className={'col-2 border p-2 text-center'}>Price</div>
            <div className={'col-2 border p-2 text-center'}>Year</div>
            <div className={'col-2 border p-2 text-center'}> ---</div>
        </div>
    );
}

export default TabHeader;