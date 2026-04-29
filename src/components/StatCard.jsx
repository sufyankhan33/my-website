import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import clsx from 'clsx';

export default function StatCard({ title, value, icon: Icon, trend, trendValue, colorClass, index }) {
  const isPositive = trend === 'up';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card hover:shadow-float transition-all duration-300 group cursor-default"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={clsx("p-3 rounded-2xl transition-colors", colorClass)}>
          <Icon className="h-6 w-6" />
        </div>
        <div className={clsx(
          "flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-lg",
          isPositive ? "text-success-dark bg-success/10" : "text-danger-dark bg-danger/10"
        )}>
          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          {trendValue}
        </div>
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </motion.div>
  );
}
