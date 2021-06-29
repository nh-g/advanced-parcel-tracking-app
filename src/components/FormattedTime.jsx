import React from 'react'

export default function FormattedTime({dateString}) {
        const date = dateString.split("T")[0];
        const time = dateString.split("T")[1].split("Z");
    return (
      <span>
           {date} at {time}
      </span>
    );
}
