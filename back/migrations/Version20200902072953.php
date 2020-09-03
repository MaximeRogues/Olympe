<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200902072953 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE gender (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE god ADD gender_id INT NOT NULL');
        $this->addSql('ALTER TABLE god ADD CONSTRAINT FK_1A63D69E708A0E0 FOREIGN KEY (gender_id) REFERENCES gender (id)');
        $this->addSql('CREATE INDEX IDX_1A63D69E708A0E0 ON god (gender_id)');
        $this->addSql('ALTER TABLE hero ADD gender_id INT NOT NULL');
        $this->addSql('ALTER TABLE hero ADD CONSTRAINT FK_51CE6E86708A0E0 FOREIGN KEY (gender_id) REFERENCES gender (id)');
        $this->addSql('CREATE INDEX IDX_51CE6E86708A0E0 ON hero (gender_id)');
        $this->addSql('ALTER TABLE monster ADD gender_id INT NOT NULL');
        $this->addSql('ALTER TABLE monster ADD CONSTRAINT FK_245EC6F4708A0E0 FOREIGN KEY (gender_id) REFERENCES gender (id)');
        $this->addSql('CREATE INDEX IDX_245EC6F4708A0E0 ON monster (gender_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE god DROP FOREIGN KEY FK_1A63D69E708A0E0');
        $this->addSql('ALTER TABLE hero DROP FOREIGN KEY FK_51CE6E86708A0E0');
        $this->addSql('ALTER TABLE monster DROP FOREIGN KEY FK_245EC6F4708A0E0');
        $this->addSql('DROP TABLE gender');
        $this->addSql('DROP INDEX IDX_1A63D69E708A0E0 ON god');
        $this->addSql('ALTER TABLE god DROP gender_id');
        $this->addSql('DROP INDEX IDX_51CE6E86708A0E0 ON hero');
        $this->addSql('ALTER TABLE hero DROP gender_id');
        $this->addSql('DROP INDEX IDX_245EC6F4708A0E0 ON monster');
        $this->addSql('ALTER TABLE monster DROP gender_id');
    }
}
