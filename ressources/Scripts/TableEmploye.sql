DROP DATABASE IF EXISTS requetemagique;

CREATE DATABASE IF NOT EXISTS requetemagique;
USE requetemagique;


DROP TABLE IF EXISTS personnel;

CREATE TABLE IF NOT EXISTS personnel
 (
   NUMEMP BIGINT NOT NULL   ,   
   NOMEMP VARCHAR (25) NOT NULL   ,
   PRENOMEMP VARCHAR (25) NOT NULL   ,
   CP char(5)NOT NULL   ,
   VILLE VARCHAR (25) NOT NULL   ,
   SEXE Char(1) DEFAULT 'M' NOT NULL,
   CODEPROJET CHAR (4) NULL   ,
   POSTE VARCHAR (20) NOT NULL   ,
   SALAIRE DECIMAL (8,2) NOT NULL   ,
   SUPERIEUR BIGINT NULL   ,
 
   constraint pk_personnel PRIMARY KEY (NUMEMP) ,
   constraint ckc_personnel_sexe CHECK (sexe in ('M', 'F'))
 ) engine=innodb
;
delete from personnel;
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (1,'DUPONT','Pierre','83000', 'Toulon','M','PR1','A22',8000,4);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (2,'JOLIBOIS','Rolland','06000', 'Nice','M','PR2','A12',10500,5);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (3,'BEAUMONT','Jean','33000','Bordeaux','M','PR1','A25',12000,6);                                                                           
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (4,'DUCHATEL','Mireille','06000','Nice','F','PR2','B12',11500,7);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (5,'MARTIN','Robert','83000','Toulon','M','PR3','B21',13000,7);                                                                         
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (6,'MAZAUD','Patricia','06000','Nice','F','PR3','B14',13000,8); 
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (7,'GIMOND','Antoine','83000','Toulon','M',null,'C17',21000,15);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (8,'SAULT','Jean','06000','Nice','M',null,'C23',21200,15);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (9,'GALLI','Jean Daniel','83000','Toulon','M','PR2','A25',10000,5);
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (10,'JACONO','Marie','83000','Toulon','F','PR5','B14',11500,20);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (11,'ANTHONY','Henri','06000', 'Nice','M','PR2','A15',9500,10);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (12,'CANE','Michel','83000', 'Toulon','M','PR1','B15',10800,8);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (13,'GOMEZ','Joseph','33000','Bordeaux','M','PR3','A12',7500,12);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (14,'RIVIERE','Maurice','83000','Toulon','M',null, 'C18',23000,15);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (15,'RUSSOT','Eric','83000','Toulon','M',null,'C23',30000,null);
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (16,'BERNARDI','Patrick','33000','Bordeaux','M','PR2','A14',9800,18);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (17,'BEUGNIES','Maurice','33000','Bordeaux','M','PR1','B12',10800,14);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (18,'FARNY','Danielle','06000','Nice','F','PR5','B15',11500,8);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (19,'ESTIVAL','Sophie','06000','Bordeaux','F','PR4','B17',12000,8);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (20,'LUNEAU','Henri','06000','Nice','M',null,'C17',22500,15);                                                                            
insert into personnel (numemp, nomemp, prenomemp, CP, VILLE, SEXE, codeprojet, poste,salaire, superieur) values (21,'BRESSON','Pierre','33000','Bordeaux','M',null,'C23',14000,15);
