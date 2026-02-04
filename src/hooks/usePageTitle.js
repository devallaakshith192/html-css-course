import { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(() => {
        const fullTitle = `${title} | Joshika Pharma Pvt Ltd`;
        document.title = fullTitle;
    }, [title]);
};

export default usePageTitle;
