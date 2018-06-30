
export default class Phone {
    id = '';
    model = '';
    price = NaN;
    image = '';
    color = '';
    colorHex = '';
    description = '';

    isNew() {
        return this.id === 'new';
    }
}