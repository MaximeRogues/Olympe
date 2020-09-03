<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200902072645 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pantheon (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE monster (id INT AUTO_INCREMENT NOT NULL, pantheon_id INT NOT NULL, name VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, place VARCHAR(255) NOT NULL, history VARCHAR(500) NOT NULL, picture VARCHAR(255) NOT NULL, INDEX IDX_245EC6F4AEC0A9E8 (pantheon_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE hero (id INT AUTO_INCREMENT NOT NULL, pantheon_id INT NOT NULL, name VARCHAR(255) NOT NULL, origin VARCHAR(255) NOT NULL, exploits VARCHAR(500) NOT NULL, picture VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, INDEX IDX_51CE6E86AEC0A9E8 (pantheon_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE god (id INT AUTO_INCREMENT NOT NULL, pantheon_id INT NOT NULL, name VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, domain VARCHAR(255) NOT NULL, picture VARCHAR(255) NOT NULL, INDEX IDX_1A63D69EAEC0A9E8 (pantheon_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE monster ADD CONSTRAINT FK_245EC6F4AEC0A9E8 FOREIGN KEY (pantheon_id) REFERENCES pantheon (id)');
        $this->addSql('ALTER TABLE hero ADD CONSTRAINT FK_51CE6E86AEC0A9E8 FOREIGN KEY (pantheon_id) REFERENCES pantheon (id)');
        $this->addSql('ALTER TABLE god ADD CONSTRAINT FK_1A63D69EAEC0A9E8 FOREIGN KEY (pantheon_id) REFERENCES pantheon (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE god DROP FOREIGN KEY FK_1A63D69EAEC0A9E8');
        $this->addSql('ALTER TABLE hero DROP FOREIGN KEY FK_51CE6E86AEC0A9E8');
        $this->addSql('ALTER TABLE monster DROP FOREIGN KEY FK_245EC6F4AEC0A9E8');
        $this->addSql('DROP TABLE god');
        $this->addSql('DROP TABLE hero');
        $this->addSql('DROP TABLE monster');
        $this->addSql('DROP TABLE pantheon');
        $this->addSql('DROP TABLE user');
    }
}
