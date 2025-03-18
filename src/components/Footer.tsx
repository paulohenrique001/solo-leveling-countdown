import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="ui-footer">
            <div className="flex flex-col items-center p-4 text-white font-bold">
                <i className="mdi mdi-debian text-2xl animate-pulse"/>
            </div>
        </footer>
    );
};

export default Footer;
