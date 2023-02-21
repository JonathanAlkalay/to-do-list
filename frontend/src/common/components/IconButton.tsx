import Button from '@mui/material/Button';



interface IconButtonProps{
    caption?: string;
    icon: React.ReactNode
}
export const IconButton = ({icon, caption}: IconButtonProps) => {
    return (
        <Button size='medium' variant="outlined" startIcon={icon}> {caption} </Button>
    )
}