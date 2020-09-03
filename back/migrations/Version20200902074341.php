<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200902074341 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE character_type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE god ADD character_type_id INT NOT NULL');
        $this->addSql('ALTER TABLE god ADD CONSTRAINT FK_1A63D69EACE90CAE FOREIGN KEY (character_type_id) REFERENCES character_type (id)');
        $this->addSql('CREATE INDEX IDX_1A63D69EACE90CAE ON god (character_type_id)');
        $this->addSql('ALTER TABLE hero ADD character_type_id INT NOT NULL');
        $this->addSql('ALTER TABLE hero ADD CONSTRAINT FK_51CE6E86ACE90CAE FOREIGN KEY (character_type_id) REFERENCES character_type (id)');
        $this->addSql('CREATE INDEX IDX_51CE6E86ACE90CAE ON hero (character_type_id)');
        $this->addSql('ALTER TABLE monster ADD character_type_id INT NOT NULL');
        $this->addSql('ALTER TABLE monster ADD CONSTRAINT FK_245EC6F4ACE90CAE FOREIGN KEY (character_type_id) REFERENCES character_type (id)');
        $this->addSql('CREATE INDEX IDX_245EC6F4ACE90CAE ON monster (character_type_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE god DROP FOREIGN KEY FK_1A63D69EACE90CAE');
        $this->addSql('ALTER TABLE hero DROP FOREIGN KEY FK_51CE6E86ACE90CAE');
        $this->addSql('ALTER TABLE monster DROP FOREIGN KEY FK_245EC6F4ACE90CAE');
        $this->addSql('DROP TABLE character_type');
        $this->addSql('DROP INDEX IDX_1A63D69EACE90CAE ON god');
        $this->addSql('ALTER TABLE god DROP character_type_id');
        $this->addSql('DROP INDEX IDX_51CE6E86ACE90CAE ON hero');
        $this->addSql('ALTER TABLE hero DROP character_type_id');
        $this->addSql('DROP INDEX IDX_245EC6F4ACE90CAE ON monster');
        $this->addSql('ALTER TABLE monster DROP character_type_id');
    }
}
