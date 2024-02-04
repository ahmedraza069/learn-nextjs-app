import { notFound } from 'next/navigation';
import React from 'react'

const ReviewDetails = ({params}) => {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
  return (
    <div>Review Id {params.reviewId} and Products Id {params.productId}</div>
  )
}

export default ReviewDetails;