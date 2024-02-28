type ButtonProps = {
    //onClick: (e: any, name: string, comment: string) => void;
    buttonType: string;
    parentID: number;
};

const Button = ({buttonType, parentID}: ButtonProps) => {
    let buttonText = '';
    let classText = 'button pad';
    if (buttonType === 'submit') {
        buttonText = 'POST'
        classText += ' submit';
    };
    if (buttonType === 'reply') {
        buttonText = 'REPLY'
        classText += ' reply';
    } ;
    
    return (
        <>
            <button
                type = 'submit'
                //onClick = {onClick}
                className={classText}
                data-parentid={parentID}
            >{buttonText}</button>
        </>
    );
};

export default Button;
