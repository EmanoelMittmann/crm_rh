import { List } from "contexts";
import { useContext, useEffect, useState } from "react";
import { Text } from "../style";
import { CompaniesField, ContainerOnPrice, Some } from "./style";

const OnPrice = () =>{
    const { professionalOS, selectSendProfessionals, } = useContext(
        List.OrderOfServiceprofessionalOS.Context
        )
        console.log('selectSendProfessionals: ', selectSendProfessionals);

    const [totalPayment, setTotalPayment] = useState<{ [companyId: number]: number }>({});

    const totalSalaryPayment = () => {
        let companiesTotal: { [companyId: number]: number } = {};

        selectSendProfessionals.forEach((item) => {
            const professional = professionalOS.find((e) => e.id === item.professional_id);

            if (professional) {
                const hourQuantity = professional?.extrahour_release
                    .map((prop) => prop.hour_quantity)
                    .reduce((acc, cc) => acc + cc, 0);

                const commissionUser = item.commission ?? 0;
                const temp = companiesTotal[item.companies_id] ?? 0;
                const payment = professional.fixed_payment_value + hourQuantity * professional.extra_hour_value + (temp + commissionUser);

                companiesTotal[item.companies_id] = payment;
            }
        });

        setTotalPayment(companiesTotal);
    };

    useEffect(() => {
        totalSalaryPayment();
    }, [selectSendProfessionals, professionalOS]);

    return (
        <ContainerOnPrice>
            {Object.entries(totalPayment).map(([companyId, amount]) => {
                const companies = professionalOS.find((prof) => prof.company_id === Number(companyId));
                console.log('companies: ', companies);
                return companies ? (
                    <CompaniesField key={companyId}>
                        <Text>{companies.companies.razao_social.toUpperCase()} </Text>
                        <Some>R$ {parseFloat(amount.toFixed(2))}
                        </Some>
                    </CompaniesField>
                ) : null;
            })}
        </ContainerOnPrice>
    );
};

export default OnPrice;