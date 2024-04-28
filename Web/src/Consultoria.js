import React from 'react';
import './index.css';
import Footer from './Footer';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Consultoria() {
  return (
    <>
      <div className="content">
        <Container component="main" maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Consultoria
          </Typography>
          <Typography variant="body1" paragraph>
            As empresas necessitam de cumprir a legislação em vigor para poderem continuar as suas atividades. No entanto, para quem pretende expandir o seu negocio ou mesmo manter-se competitivo face aos seus concorrentes, há sempre algo mais a acrescentar. Para tal é necessário por um lado ter um perfeito conhecimento do seu negocio (possível através de uma análise sistemática por indicadores) e por outro manter-se criativo por forma a posicionar-se corretamente adivinhando as expectativas e necessidades dos seus clientes. De acordo com a fase de desenvolvimento da sua empresa terá necessidade de serviços distintos. Desta forma propomos uma prestação de serviços de forma integrada com o funcionamento da empresa, sob a forma de módulos, os quais serão implementados de acordo com as necessidades do cliente.
          </Typography>

          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5">
                Implementação dos seguintes referenciais:
              </Typography>
              <List>
                {["IFS - International Food Standard", "BRCG - British Retail Consortium Global Standard", "FSSC 22000 - Food Safety System Certification", "GLOBAL G.A.P.", "GRASP", "Sistemas HACCP (Codex Alimentarius, Regulamentos n.º 852/2004 e n.º 853/2004)", "Sistemas de Gestão da Qualidade (ISO 9001)", "Sistemas de Gestão da Segurança Alimentar (ISO 22000)", "Sistemas de Gestão Ambiental (ISO 14001)", "Sistemas de Gestão de Segurança e Higiene no Trabalho (ISO 45001)", "Acompanhamento / Manutenção de Sistemas de Gestão da Qualidade e de Segurança Alimentar (Outsourcing)", "Apoio no cumprimento da legislação vigente aplicável"].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <Typography variant="body2">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Prestação de serviços modulares:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {["Implementação de Sistemas HACCP (Codex Alimentarius, Regulamentos n.º 852/2004 e n.º 853/2004)", "Gestão de ocorrências", "Gestão de indicadores", "Gestão de plano de análise", "Gestão de plano de Formação", "Indicadores de qualidade de serviço", "Gestão documental", "Organização e manutenção da legislação adequada ao sector", "Qualificação de fornecedores", "Validação de rotulagem", "Validação de manuais", "Validação de produto"].map((service, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <Typography variant="body2">{service}</Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Typography variant="body1" paragraph>
            Entre em contato conosco para saber mais sobre como podemos ajudar o seu negócio a crescer e prosperar.
          </Typography>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Consultoria;
