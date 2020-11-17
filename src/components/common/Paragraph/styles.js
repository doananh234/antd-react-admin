import styled from 'styled-components';

const ParagraphStyles = styled.div`
    background: ${({theme}) => theme.background.content};
    padding: 15px;
    .title-paragraph {
        margin-bottom: 10px;
    }
`;

export default ParagraphStyles;