use actix_web::{get, App, HttpServer, Responder, HttpResponse};
use serde::Serialize;

#[derive(Serialize)]
struct Person {
    name: String,
    age: u32,
}

#[get("/persons")]
async fn get_data() -> impl Responder {
    let data = vec![
        Person { name: "cordy".to_string(), age: 12 },
        Person { name: "cordy2".to_string(), age: 21 }
    ];
    
    HttpResponse::Ok().json(data)

}

#[actix_web::main]
async fn main() -> std::io::Result<()>{
    HttpServer::new(|| {
        App::new()
            .service(get_data)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}