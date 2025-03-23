export default class Id {
    gerar(): string {
        const p1 =  Math.random().toString(36).substring(2, 15);
        const p2 =  Math.random().toString(36).substring(2, 15);
        const p3 =  Math.random().toString(36).substring(2, 15);

        return `${p1}-${p2}-${p3}`;
    }
}
