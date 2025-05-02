const ServiceCheckbox = ({ item, ...props }) => {
    const renderSubOptions = (servico) => {
      switch(servico) {
        case "Transporte":
          return props.isSelectedTransporte && (
            <div className="ml-6 space-y-2 mt-1">
              <CheckboxOption 
                label="Noivos" 
                onClick={() => props.setNomeServicoVolatel("Noivos")} 
              />
              <CheckboxOption 
                label="Acompanhantes e Convidados" 
                onClick={() => props.setNomeServicoVolatel("Acompanhantes e Convidados")} 
              />
            </div>
          );
        case "Local de Celebração":
          return props.isSelectedLocalSelecbracao && (
            <div className="ml-6 space-y-2 mt-1">
              <CheckboxOption 
                label="Casa" 
                onClick={() => props.setNomeServicoVolatel("Local de Celebração (Casa)")} 
              />
              <CheckboxOption 
                label="Salão" 
                onClick={() => props.setNomeServicoVolatel("Local de Celebração (Salão)")} 
              />
              <CheckboxOption 
                label="Praia" 
                onClick={() => props.setNomeServicoVolatel("Local de Celebração (Praia)")} 
              />
              <CheckboxOption 
                label="Quintas" 
                onClick={() => props.setNomeServicoVolatel("Local de Celebração (Quintas)")} 
              />
            </div>
          );
        // Adicione outros casos conforme necessário
        default:
          return null;
      }
    };
  
    return (
      <div key={item.servico}>
        <label className="flex items-start space-x-2 cursor-pointer group">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition"
            onClick={() => item.servico === "Transporte" || item.servico === "Local de Celebração" 
              ? props.clickItem(item.servico) 
              : props.setNomeServicoVolatel(item.servico)
            }
          />
          <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
            {item.servico}
          </span>
        </label>
        {renderSubOptions(item.servico)}
      </div>
    );
  };
  
  const CheckboxOption = ({ label, onClick }) => (
    <label className="flex items-start space-x-2 cursor-pointer group">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition"
        onClick={onClick}
      />
      <span className="text-gray-600 text-sm group-hover:text-blue-500 transition-colors">
        {label}
      </span>
    </label>
  );