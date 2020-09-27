import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';





const DishDetail = (props) => {


    if (props.dish != null) {


        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderDish({ dish }) {
    if (dish != null) {

        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}
function RenderComments({ comments }) {

    if (comments != null) {

        const eachComment = comments.map(currentComment => {
            return (
                <li key={currentComment.id}>
                    {currentComment.comment}
                    <br />
                    <p> - {currentComment.author},
                        {new Intl.DateTimeFormat('en', {
                        day: 'numeric', month: 'short', year: 'numeric'
                    }).format(new Date(currentComment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {eachComment}
                </ul>

            </div>
        )


    } else {
        return (
            <div></div>
        );
    }

}





export default DishDetail;
