export function Badge({ className, variant = "default", children, ...props }) {
  let variantClasses = ""
  
  if (variant === "secondary") {
    variantClasses = "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200"
  } else if (variant === "destructive") {
    variantClasses = "border-transparent bg-red-500 text-white hover:bg-red-600" 
  } else if (variant === "outline") {
    variantClasses = "border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50"
  } else {
    variantClasses = "border-transparent bg-blue-500 text-white hover:bg-blue-600"
  }

  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  
  let finalClasses = baseClasses + " " + variantClasses
  if (className) {
    finalClasses += " " + className
  }

  return <div className={finalClasses} {...props}>{children}</div>
}