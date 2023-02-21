import Button from '@mui/material/Button';


interface PrimaryButtonProps{
    caption?: string;
    icon?: React.ReactNode
    onClick: () => void;
}
export const PrimaryButton = ({icon, caption, onClick}: PrimaryButtonProps) => {
    return (
        <Button onClick={onClick} size='medium' variant="outlined" startIcon={icon}> {caption} </Button>
    )
}