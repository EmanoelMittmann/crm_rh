export const formatDate = (dateWithoutFormatting: string | number | Date) => {
    const date = new Date(dateWithoutFormatting)
    const newDate = new Intl.DateTimeFormat('pt-BR').format(date)
    return newDate; 
}
