import {notFound} from "next/navigation";

export default function ReviewDetails({params}:
    {
params:{
    productid: string;
    reviewid:string;
}
    }
){
    if (parseInt(params.reviewid) > 100){
        notFound();
    }
    return ( <h1>
        Review {params.reviewid} for product {params.productid}
    </h1>
);
}