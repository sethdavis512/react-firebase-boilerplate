import React from 'react';
import classnames from 'classnames';

const Wrapper = ({ children, isCentered = true, size = 'half' }) => {
    const columnsClassName = classnames('columns', {
        'is-centered': isCentered
    });
    const columnClassName = classnames('column', {
        'is-half': size === 'half',
    });
    return (
        <section className="section">
            <div className="container">
                <div className={columnsClassName}>
                    <div className={columnClassName}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Wrapper;