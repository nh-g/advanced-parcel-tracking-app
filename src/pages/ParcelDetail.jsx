import React from 'react'

export default function ParcelDetail({ data }) {
    console.log("detail page data", [data])
    return (
      <div>
        {data.map((item) => (
          <div>
            {item.sender}: {item.status}
          </div>
        ))}
      </div>
    );
}
