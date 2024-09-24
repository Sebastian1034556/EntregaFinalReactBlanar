export function CartItem({ item }){
    return (
        <div className="flex justify-between py-2 border-b last:border-b-0">
            <span className="flex-1">{item.name}</span>
            <span className="flex-1 text-right">${item.price}</span>
            <span className="flex-1 text-right">{item.quantity}</span>
        </div>
    );
};
