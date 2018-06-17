create database loja_alura;
use loja_alura;
create table livros (
  id        int primary key auto_increment,
  titulo    varchar(100),
  descricao varchar(255),
  preco     decimal(6, 2)
);

insert livros (titulo, descricao, preco)
values ('node js', 'aprenda a programar em javascript do lado do servidor', 50.50);
insert livros (titulo, descricao, preco)
values ('Angular', 'Use o framework da google para criar aplicações rapidamente', 30.00);
insert livros (ittulo, descricao, preco)
values ('Desenvolvimento mobile com Ionic ', 'Aprenda a criar aplicativos hibridos usando tecnologias da web', 50.50);

insert into livros (titulo, descricao, preco) values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);
insert into livros (titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);
insert into livros (titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);

select *
from produtos;
