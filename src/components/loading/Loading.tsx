import { useIsFetching, useIsMutating } from 'react-query';
import { Spinner } from './Loading.style';

const Loading = () => {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();

    const display = isFetching || isMutating ? 'inherit' : 'none';

    return <Spinner style={{ display: display }} />;
};

export default Loading;
