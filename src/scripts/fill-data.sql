create type status_type as enum('OPEN', 'ORDERED');

create extension if not exists "uuid-ossp";

create table carts (
	id uuid not null default uuid_generate_v4() primary key,
	user_id uuid not null,
	created_at date not null,
	updated_at date not null,
	status status_type
);

create table cart_items (
	cart_id uuid not null references carts,
	product_id uuid,
	count integer
);

insert into carts (user_id, created_at, updated_at, status) values ('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', '2022-07-22', '2022-07-22', 'OPEN');
insert into carts (user_id, created_at, updated_at, status) values ('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c', '2023-05-13', '2023-05-13', 'ORDERED');
insert into carts (user_id, created_at, updated_at, status) values ('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e', '2023-05-14', '2023-05-14', 'OPEN');

insert into cart_items (cart_id, product_id, count) values ('1d76c877-daf7-4a4f-a48e-d6fab8c53f06', '22c6cc60-d8fe-11ed-aad5-030489c75e62', 2);
insert into cart_items (cart_id, product_id, count) values ('bf58ace2-ba99-4742-971c-ca03807b1e46', 'aae176c0-e53a-11ed-87bf-637ef2d9ae04', 10);
insert into cart_items (cart_id, product_id, count) values ('ab09bf3e-bf24-4fc0-992a-2299c85ff237', 'e360cbc0-e541-11ed-8700-a908b9998308', 5);
