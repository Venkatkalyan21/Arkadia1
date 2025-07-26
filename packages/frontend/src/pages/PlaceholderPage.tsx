import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft, Calendar, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description = "This feature is currently under development. Stay tuned for updates!"
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <Card className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full mb-6"
          >
            <Construction size={40} className="text-yellow-400" />
          </motion.div>
          
          <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-300 mb-8">{description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-8">
            <div className="flex items-center justify-center space-x-2 text-blue-400 p-3 bg-slate-700/30 rounded-lg">
              <Calendar size={16} />
              <span>Coming Q2 2025</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-400 p-3 bg-slate-700/30 rounded-lg">
              <Bell size={16} />
              <span>Get Notified</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </Button>
            <Button variant="primary" className="flex-1">
              <Bell size={16} className="mr-2" />
              Notify Me
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};