
import React from 'react';

interface RoleCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className={`group p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-stone-50 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
            {icon}
          </div>
          <h4 className={`text-xl font-bold ${color} tracking-tight`}>
            {title}
          </h4>
        </div>
        <p className="text-stone-600 text-sm leading-relaxed">
          {description}
        </p>
        <div className="pt-2">
          <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-amber-200 to-transparent`}></div>
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
