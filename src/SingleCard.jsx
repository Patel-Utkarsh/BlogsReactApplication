import "./singleCard.css"

export default function SingleCard(data) {
  
    const tgs = data.values.tags;
    console.log(tgs);
   
    return (
        <div className="singleCard">
            <h2>{data.values.title}</h2>
            <p>{data.values.author}</p>
            <p>{`posted on ${data.values.date}`}</p>
            <br />
            <p>{data.values.content}</p>

            <p>
                {tgs.map((element, index) => (
                    <span key={index} className="tagsSp">
                        {`#${element}`}
                        {index !== tgs.length - 1 && " "} {/* Add space if not the last element */}
                    </span>
                ))}
            </p>
        </div>
    );

}